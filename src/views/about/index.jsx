import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

const About = extend({
    pageinfo: () => ({
        title: `Super Booster`,
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        return (
            <div className={classNames([className, 'container'])}>
                <section className="AboutPage">
                    <h3 className="title">
                        <span></span>
                    </h3>
                    <div className="content"></div>
                </section>
            </div>
        );
    })
);

export default About;
