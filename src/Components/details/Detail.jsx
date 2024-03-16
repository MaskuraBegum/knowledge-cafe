
import PropTypes from 'prop-types';
const Detail = ({blog}) => {
    const{cover,title} = blog
    return (
        <div className='p-10 space-y-3'>
            <img className='w-[700px]' src={cover} alt="" />
            <h1 className='text-4xl'>{title}</h1>
        </div>
    );
};
Detail.propTypes = {
    blog : PropTypes.object.isRequired
}
export default Detail;