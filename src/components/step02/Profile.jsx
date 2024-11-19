import React from 'react';
import Avatar from './Avatar';

function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{ name: 'hong', imageId: 'YfeOqp2' }}
            />
            <Avatar
                size={80}
                person={{ name: 'park', imageId: 'OKS67lh' }}
            />
            <Avatar
                size={60}
                person={{ name: 'Lee', imageId: '1bX5QH6' }}
            />
        </div>
    );
}

export default Profile;