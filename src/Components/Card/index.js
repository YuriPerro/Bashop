import * as React from 'react';
import {Avatar} from 'baseui/avatar';
import {useStyletron, expandBorderStyles} from 'baseui/styles';
export default function Card() {
    return (
        <React.Fragment>
            {[
                '64px',
                '64px',
                '64px',
            ].map((size, index) => (
                <Avatar
                    name={`user`}
                    size={size}
                    src="https://not-a-real-image.png"
                    key={size}
                />
            ))}
        </React.Fragment>
    );
};