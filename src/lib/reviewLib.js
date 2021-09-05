import { db } from '../firebase';
import { saveMenuReview } from './menuLib';

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

export const calcStar = async(restId, menuId) => {
  let count = 0;
  let tmp = 0;
  let star = 0;
  const getData = getReviewList(restId, menuId)
  await getData.then((reviews) => {
    reviews.map((review) => {
      count += 1;
      tmp += review.star;
    })
    star = Math.round((tmp/count) * Math.pow(10,2))/Math.pow(10,2);
    const data = {
      count: count,
      star: star
    }
    saveMenuReview(menuId, restId, data);
  })
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