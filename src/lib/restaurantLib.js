import { db } from '../firebase';

const restaurantsRef = db.collection('restaurants');

export const saveRestaurant = (id, name, address) => {

  const data = {
    name: name,
    address: address,
  }
  if(id === "") {
    const ref = restaurantsRef.doc();
    id = ref.id;
    data.id = id;
  }
  return restaurantsRef.doc(id).set(data, {merge: true})
    .then(() => {
    }).catch((error) => {
      throw new Error(error)
    })
}