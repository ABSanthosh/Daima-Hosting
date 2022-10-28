import { useCallback, useEffect, useMemo, useRef } from "react";

export default function useHotKey(keyString, callback) {
  const keys = keyString.split("+");
  const KeysId = useMemo(() => keys.join(), [keys]);

  const memoedCallback = useCallback(callback, [callback]);

  const shortcutArray = useMemo(
    () => uniq_fast(keys).map((key) => String(key).toLowerCase()),
    [KeysId]
  );

  const heldKeys = useRef([]);

  const keydownListener = useCallback(
    (keydownEvent) => {
      const loweredKey = String(keydownEvent.key).toLowerCase();
      if (!(shortcutArray.indexOf(loweredKey) >= 0)) return;

      if (keydownEvent.repeat) return;

      overrideSystemHandling(keydownEvent);

      const isHeldKeyCombinationValid = checkHeldKeysRecursive(
        loweredKey,
        null,
        shortcutArray,
        heldKeys.current
      );

      if (!isHeldKeyCombinationValid) {
        return;
      }

      const nextHeldKeys = [...heldKeys.current, loweredKey];
      if (nextHeldKeys.join() === shortcutArray.join()) {
        memoedCallback(keys);
        return false;
      }

      heldKeys.current = nextHeldKeys;

      return false;
    },
    [KeysId, callback]
  );

  const keyupListener = useCallback(
    (keyupEvent) => {
      const raisedKey = String(keyupEvent.key).toLowerCase();
      if (!(shortcutArray.indexOf(raisedKey) >= 0)) return;

      const raisedKeyHeldIndex = heldKeys.current.indexOf(raisedKey);
      if (!(raisedKeyHeldIndex >= 0)) return;

      let nextHeldKeys = [];
      let loopIndex;
      for (loopIndex = 0; loopIndex < heldKeys.current.length; ++loopIndex) {
        if (loopIndex !== raisedKeyHeldIndex) {
          nextHeldKeys.push(heldKeys.current[loopIndex]);
        }
      }
      heldKeys.current = nextHeldKeys;

      return false;
    },
    [KeysId]
  );

  const flushHeldKeys = useCallback(() => {
    heldKeys.current = [];
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);
    return () => {
      window.removeEventListener("keydown", keydownListener);
      window.removeEventListener("keyup", keyupListener);
    };
  }, [keydownListener, keyupListener, KeysId]);

  useEffect(() => {
    flushHeldKeys();
  }, [KeysId, flushHeldKeys]);
}

// Utils

export function overrideSystemHandling(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
  }
}

export function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

export function checkHeldKeysRecursive(
  shortcutKey,
  shortcutKeyRecursionIndex = 0,
  shortcutArray,
  heldKeysArray
) {
  const shortcutIndexOfKey = shortcutArray.indexOf(shortcutKey);
  const keyPartOfShortCut = shortcutArray.indexOf(shortcutKey) >= 0;

  if (!keyPartOfShortCut) return false;

  const comparisonIndex = Math.max(heldKeysArray.length - 1, 0);
  if (
    heldKeysArray.length &&
    heldKeysArray[comparisonIndex] !== shortcutArray[comparisonIndex]
  ) {
    return false;
  }

  if (shortcutIndexOfKey === 0) {
    if (shortcutKeyRecursionIndex > 0)
      return heldKeysArray.indexOf(shortcutKey) >= 0;
    return true;
  }

  const previousShortcutKeyIndex = shortcutIndexOfKey - 1;
  const previousShortcutKey = shortcutArray[previousShortcutKeyIndex];
  const previousShortcutKeyHeld =
    heldKeysArray[previousShortcutKeyIndex] === previousShortcutKey;

  if (!previousShortcutKeyHeld) return false;

  return checkHeldKeysRecursive(
    previousShortcutKey,
    shortcutIndexOfKey,
    shortcutArray,
    heldKeysArray
  );
}
