import React from 'react';

export default function Chef({ chef }) {
    return (
        <div className="chef-container">
            <div>
                <p>{chef.chef_type}</p>
                <p>{chef.city}</p>
                <p>{chef.first_name}</p>
                <p>{chef.last_name}</p>
                <p>{chef.zip_code}</p>
            </div>
        </div>
    )
}