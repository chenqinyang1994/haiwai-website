import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';

import classNames from 'classnames';
import clearImg from '@assets/haiwai-img/clear.png';
import styles from './index.module.less';

const textMap = [
    'SuperBooster is your best choice to solve the stuttering of your phone.',
    'Main Feature:',
    'Phone Boost:',
    'Super Booster focuses on optimizing your phone speed. Clear your phone of junk files and dead processes to make your device run faster.',
    'Junk Clean:',
    'If you have too much junk on your phone, it will cause you to run out of storage space and slow down your phone. Regular junk cleaning can keep your phone in a relaxed state.',
    'Battery Saver:',
    'When there are programs running secretly in the background of the mobile phone, the mobile phone will consume a lot of power. The power saving feature can help you end ineffective processes. But you can rest assured that we will not kill the main process and will not affect your use.',
    'CPU cooler:',
    'It can effectively reduce the CPU temperature of the mobile phone, so that your mobile phone is no longer hot and runs more smoothly.',
];

const Recommend = extend({
    pageinfo: () => ({
        title: `Super Booster`,
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
                            {textMap.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
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
