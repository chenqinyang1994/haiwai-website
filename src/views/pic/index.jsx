import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';

import classNames from 'classnames';
import styles from './index.module.less';

const PageHome = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        return (
            <div className={classNames([className])}>
                <div className="picList"></div>
            </div>
        );
    })
);

export default PageHome;
