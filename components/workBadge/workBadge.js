import Link from 'next/link';
import * as C from './style';

export const WorkBadge = ({ link, img, text }) => {
  return (
    <C.AboutBadge>
      <Link href={link} target='_blank' style={{ textDecoration: 'none' }}>
        <C.WorkTitleAndImg>
          {img}
          <p>{text}</p>
        </C.WorkTitleAndImg>
      </Link>
    </C.AboutBadge>
  );
};


