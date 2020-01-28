// 1 Создать функцию которая возмет всех юзеров http://jsonplaceholder.typicode.com/users, потом запросит массив альбомов и добавит каждому юзеру в массив albums все эти альбомы http://jsonplaceholder.typicode.com/albums смторим на userId. После запрашиваем photos http://jsonplaceholder.typicode.com/photos и добавлем все фотки в альбомы по albumId каждому юзеру.


const foo = async() => {
  let usersResult = await fetch('http://jsonplaceholder.typicode.com/users');
  let users = await usersResult.json();

  let usersAlbums = await fetch(' http://jsonplaceholder.typicode.com/albums');
  let albums = await usersAlbums.json();

  let usersPhotos = await fetch(' http://jsonplaceholder.typicode.com/photos');
  let photos = await usersPhotos.json();

  for (let value of users) {
    let filterAlbum = albums.filter(item => value.id === item.userId)
    for (let value of albums) {
        let filterphotosArr = photos.filter(item => value.id === item.albumId)
        value.photos = filterphotosArr
    }
    value.albums = filterAlbum
}
  console.log(users);
}
foo();
