import Photo from '../../assets/avatar.jpg'

export function Avatar() {
    return (
      <>
          <img id="biography-avatar" className="rounded-full bg-white p-1 bg-transparent self-center" src={Photo} alt="Adelina Chandra" width="150" height="150"/>
          {/* <span class="avatar-emoji z-10 relative">☕️</span> */}
      </>
    );
  }
  
  export default Avatar;
  