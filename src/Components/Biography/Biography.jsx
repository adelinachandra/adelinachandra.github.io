
import { Avatar } from './Avatar';
import { BioTexts } from './BioTexts';
import { Resume } from './Resume';
import { Socials } from './Socials';

export function Biography() {
  return (
    <section id='biography' className='flex flex-col justify-center align-middle pt-10'>
      <Avatar/>
      <Socials/>
      <BioTexts/>
      <Resume/>
    </section>
  );
}
  
export default Biography;
  