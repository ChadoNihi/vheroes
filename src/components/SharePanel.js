import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton
} = ShareButtons;

export default ()=> {
  return (
    <div>
      <FacebookShareButton />
      <TwitterShareButton />
      <GooglePlusShareButton />
      <VKShareButton />
      <LinkedinShareButton />
      <PinterestShareButton />
    </div>
  )
};
