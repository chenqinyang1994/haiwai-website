import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';

import classNames from 'classnames';
import clearImg from '@assets/haiwai-img/clear.png';
import styles from './index.module.less';

const Recommend = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
    }),
    styles,
})(
    memo(({ className }) => {
        return (
            <div className={classNames([className, 'container'])}>
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h2 className="title" />
                <div className="artBox">
                    <div className="lBox">
                        <div className="info">
                            <p>
                                This is probably the best cleaning tool you've
                                ever tried. Booster, save power, and cool down
                                easily. Super Cleaner Key Functions:
                            </p>
                            <p>Clean up：</p>
                            <p>
                                The solution is specially designed for
                                insufficient storage space. Don't let junk slow
                                down your phone!
                            </p>
                            <p>Boost:</p>
                            <p>
                                Focus on optimizing the speed of your phone.
                                Solve stuttering problems with memory and
                                fragmentation methods.
                            </p>
                            <p>Phone Cooler:</p>
                            <p>
                                It can effectively reduce the CPU temperature of
                                Android phones, so that game and use process are
                                no longer hot!
                            </p>
                            <p>Power Saver:</p>
                            <p>
                                Precise strategy design for processes to help
                                you hibernate useless processes and save more
                                power!
                            </p>
                        </div>
                    </div>
                    <div className="rBox">
                        <img src={clearImg} alt="clearImg" />
                    </div>
                </div>
            </div>
        );
    })
);

export default Recommend;
