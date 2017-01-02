import React  from 'react';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import appUrl from '../constants';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton
} = ShareButtons;

export default ({pathname})=> {
  const url = appUrl + pathname;
  return (
    <div className='share-panel'>
      <FacebookShareButton url={url}>test</FacebookShareButton>
      <TwitterShareButton url={url}>test</TwitterShareButton>
      <GooglePlusShareButton url={url}>test</GooglePlusShareButton>
      <VKShareButton url={url}>test</VKShareButton>
      <LinkedinShareButton url={url}>test</LinkedinShareButton>
      <PinterestShareButton url={url}>test</PinterestShareButton>
    </div>
  )
};
