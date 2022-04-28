import React from 'react';
import { memo, useState, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

const About = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        const [artTitle, setArtTitle] = useState('');
        const [content, setcontent] = useState('');
        return (
            <div className={classNames([className, 'container'])}>
                <section className="AboutPage">
                    <h3 className="title">
                        <span>{artTitle}</span>
                    </h3>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </section>
            </div>
        );
    })
);

export default About;
