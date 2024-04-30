
import { Avatar } from './Avatar';
import { BioTexts } from './BioTexts';
import { Socials } from './Socials';

export function Biography() {
  return (
    <section id='biography' className='flex flex-col justify-center align-middle pt-10'>
      <Avatar/>
      <Socials/>
      <BioTexts/>
    </section>
  );
}
  
export default Biography;
  