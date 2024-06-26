import Link from 'next/link';
import Image from 'next/image';
import * as C from './style'

export const WorkBadge = ({ link, img }) => {
    return (
        <C.AboutBadge>
            <Link href={link} target='_blank'>
                <C.WorkTitleAndImg>
                    <Image
                        src={`/images/${img}`}
                        width={20}
                        height={20}
                        alt='Jonnpo logo'
                    />
                    <p>Jonnpo</p>
                </C.WorkTitleAndImg>
            </Link>
        </C.AboutBadge>
    )
}