let cont = document.querySelector('.container');

cont.addEventListener('click', async () => {
	let fileHandle = await window.showDirectoryPicker();
	let fileArray = await getFile(fileHandle);
	console.log(fileArray);
});

async function getFile(fileHandle){
	let fileArray = []
	let dirEntries = fileHandle.entries();
	let ent = await dirEntries.next();
	while(!ent.done){
		let fh = ent.value[1];
		let obj = {};
		if(fh.kind == 'directory'){
			obj.name = obj.name = ent.value[0];
			obj.type = fh.kind;
			obj.children = await getFile(fh);
			fileArray.push(obj);
		}
		else{
			obj.name = ent.value[0];
			obj.type = fh.kind;
			fileArray.push(obj);
		}
		ent = await dirEntries.next();
	}
	return fileArray;
}