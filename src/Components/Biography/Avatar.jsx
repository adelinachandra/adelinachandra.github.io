import Photo from '../../assets/avatar.jpg'

export function Avatar() {
    return (
      <>
          <img id="biography-avatar" className="rounded-full bg-white p-1 bg-transparent self-center" src={Photo} alt="Adelina Chandra" width="200" height="200"/>
      </>
    );
  }
  
  export default Avatar;
  