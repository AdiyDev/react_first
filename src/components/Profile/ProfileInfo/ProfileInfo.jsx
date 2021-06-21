import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from './../../Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {

    return <Preloader />
  }

  return (
    <ul className={s.profileInfoWrapper}>
      <li className={s.imageBlock}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""></img>
      </li>
      <li className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.fullName}</p>
      </li>
      <li>
        {/* in contacts много элементов */}
        <p>{props.profile.contacts.github}</p>
        <p>
          В поисках ли я работы?
          {!props.profile.lookingForAJob ? " не ищу" : ' работаю за еду'}</p>
        <p>
          <span>Рабочие скиллы </span>
          {props.profile.lookingForAJobDescription}
        </p>
        <p>Тут моя маленькая аватарка</p>
        <p>
          <img src={props.profile.photos.small} className={s.minPhoto} alt="" />
        </p>
      </li>
    </ul>
  )
}

export default ProfileInfo;