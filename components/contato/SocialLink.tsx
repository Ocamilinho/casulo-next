import { FaTwitter, FaFacebook, FaYoutube,FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { FaThreads, FaBluesky } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type SocialLinkProps = {
  href: string;     
  platform: string;  
};

const icons: { [key: string]: JSX.Element } = {
  facebook: <FaFacebook color="white" size={64} />,
  email: <MdEmail color="white" size={64} />,
  whatsapp: <FaWhatsapp color="white" size={64} />,
  bluesky: <FaBluesky color="white" size={64} />,
  instagram: <FaInstagram color="white" size={64} />,
  youtube: <FaYoutube color="white" size={64} />,
  threads: <FaThreads color="white" size={64} />,
  twitter: <FaTwitter color="white" size={64} />,
};

export default function SocialLink({ href, platform }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
        {icons[platform]}<br />
        <h4 className="font-light text-branco">{platform.charAt(0).toUpperCase() + platform.slice(1)}</h4>
      </div>
    </a>
  );
}