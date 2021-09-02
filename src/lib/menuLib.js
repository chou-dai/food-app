import { db } from '../firebase';

const restRef = db.collection('restaurants');

export const firstSaveMenu = (id, restId, name, price, images, noImage) => {
  const menusRef = restRef.doc(restId).collection('menus');
  const data = {
    name: name,
    price: price,
    images: images,
    noImage: noImage
  }
  if(id === "") {
    const ref = menusRef.doc();
    id = ref.id;
    data.id = id;
  }
  return menusRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}


export const editSaveMenu = (id, restId, name, price) => {
  const menusRef = restRef.doc(restId).collection('menus');
  const data = {
    name: name,
    price: price,
  }
  return menusRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}


export const getMenuList = async(restId) => {
  const data = [];
  const menusRef = restRef.doc(restId).collection('menus');
  await menusRef.get()
    .then(snapshots => {
      snapshots.forEach(snapshot => {
        const tmp = snapshot.data();
        data.push(tmp)
      })
    })
  return data;
}


export const getMenuDetail = async(restId, menuId) => {
  let data = null;
  const menusRef = restRef.doc(restId).collection('menus');
  await menusRef.doc(menuId).get()
    .then(doc => {
      data = doc.data();
    })
  return data;
}