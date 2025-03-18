import reactLogo from '../assets/reactJS.png';

const Images = () => {
    return (
        <div>
            {/*valor da imagem  como props para setar no campo src*/}
            <img src={reactLogo} alt="Logo"/>
        </div>
    );
};

export default Images;