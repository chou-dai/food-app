import { db } from '../firebase';

const restRef = db.collection('restaurants');

export const firstSaveReview = async(id, restId, menuId, star, comment) => {
  const reviewRef = restRef.doc(restId).collection('menus').doc(menuId).collection('reviews');
  const data = {
    star: star,
    comment: comment,
  }
  if(id === "") {
    const ref = reviewRef.doc();
    id = ref.id;
    data.id = id;
  }
  return await reviewRef.doc(id).set(data, {merge: true})
    .then(() => {
      return
    }).catch((error) => {
      throw new Error(error)
    })
}

export const calcStar = async() => {
}

export const getReviewList = async(restId, menuId) => {
  const data = [];
  const reviewRef = restRef.doc(restId).collection('menus').doc(menuId).collection('reviews');
  await reviewRef.get()
    .then(snapshots => {
      snapshots.forEach(snapshot => {
        const tmp = snapshot.data();
        data.push(tmp)
      })
    })
  return data;
}