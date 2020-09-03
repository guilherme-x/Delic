var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('arquivos/'+file.name);

    var task = storageRef.put(file);

    task.on('state_changed',
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
            uploader.value = percentage;
            console.log(percentage);
        },
        function error(err){
            console.log(err);
        },
        function complete(){
            alert('Upload concluído');
        }
        );
});