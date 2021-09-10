import { db } from '../firebase';

const restaurantsRef = db.collection('restaurants');


export const firstSaveRestaurant = (id, name, address, images, noImage) => {
  const data = {
    name: name,
    address: address,
    images: images,
    noImage: noImage
  }
  if(id === "") {
    const ref = restaurantsRef.doc();
    id = ref.id;
    data.id = id;
  }
  return restaurantsRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}

export const editSaveRestaurant = (id, name, place, pref) => {
  const data = {
    name: name,
    place: place,
    pref: pref,
  }
  return restaurantsRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}


export const saveRestaurantImage = async(id, images) => {
  const data = {
    images: images,
  }
  return await restaurantsRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}


export const deleteRestaurant = (restId) => {
}


export const getRestaurantList = async() => {
  const data = [];
  await restaurantsRef.get()
    .then(snapshots => {
      snapshots.forEach(snapshot => {
        const tmp = snapshot.data();
        data.push(tmp)
      })
    })
  return data;
}


export const getRestaurantDetail = async(restId) => {
  let data = null;
  await restaurantsRef.doc(restId).get()
    .then(doc => {
      data = doc.data();
    })
  return data;
}