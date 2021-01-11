import React from 'react';
import {RegisterBg} from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, mauris sed scelerisque aliquet, elit felis euismod sapien, quis consectetur purus risus ut justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada diam eros, quis efficitur mauris mattis non. Vivamus pellentesque pharetra elit in condimentum. Curabitur ullamcorper mi nisi, nec tempus eros accumsan et. Pellentesque eget condimentum ligula, a maximus libero. Donec malesuada mi a ante finibus aliquet. In molestie risus non lacus lobortis, at pellentesque ante ultricies. Donec posuere nisl enim, quis viverra eros laoreet ac. Integer purus nisl, dictum non facilisis sed, consectetur eget augue. Vestibulum enim nunc, elementum ac condimentum eu, luctus id nibh. Praesent arcu metus, convallis sit amet elit sit amet, laoreet placerat enim. Morbi ullamcorper dui ac erat lacinia tempus. Aliquam eget scelerisque nunc, sit amet convallis libero. Aenean rutrum aliquet nulla, eget euismod nibh hendrerit vitae. Aenean enim diam, ullamcorper nec vestibulum vitae, porttitor sit amet ex.</p>
        </div>
    )
}

export default DetailBlog
