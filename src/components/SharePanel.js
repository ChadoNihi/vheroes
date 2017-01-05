import React  from 'react';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import {baseUrl} from '../constants';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');

export default ({description, hashtags, media, pathname, title})=> {
  const url = baseUrl + pathname;
  return (
    <div className='share-panel'>
      <FacebookShareButton url={url} description={description} title={title}>
        <FacebookIcon size={30} />
      </FacebookShareButton>

      <TwitterShareButton url={url} hashtags={hashtags || []} title={title}>
        <TwitterIcon size={30} />
      </TwitterShareButton>

      <GooglePlusShareButton url={url}>
        <GooglePlusIcon size={30} />
      </GooglePlusShareButton>

      <VKShareButton url={url} description={description} title={title}>
        <VKIcon size={30} />
      </VKShareButton>

      <LinkedinShareButton url={url} description={description} title={title}>
        <LinkedinIcon size={30} />
      </LinkedinShareButton>

      <PinterestShareButton url={url} description={description} media={media}>
        <PinterestIcon size={30} />
      </PinterestShareButton>
    </div>
  )
};
