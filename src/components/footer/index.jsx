import React from 'react';
import { memo, useState, useEffect } from 'react';
import { extend } from 'koot';
import { getHistory } from 'koot';
import classNames from 'classnames';

import { Link } from 'react-router';
import styles from './index.module.less';

const Footer = extend({
    pageinfo: () => ({
        title: `Super Booster`,
    }),
    styles,
})(
    memo(({ className, props }) => {
        return (
            <div className={classNames([className])}>
                <div className="footer">
                    <div className="footerContent">
                        <div className="lBox">
                            <div className="copyright">
                                copyright@2022 All Right Super Booster
                            </div>
                            <div className="links">
                                <Link to="/wifePrivacyPolicy">
                                    privacy policy
                                </Link>
                                <Link to="/wifeuserAgreement">
                                    user agreement
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerM">
                    <div>copyright@2022 All Right Super Booster</div>
                    <div className="links">
                        <Link to="/wifePrivacyPolicy">privacy policy</Link>
                        <Link to="/wifeuserAgreement">user agreement</Link>
                    </div>
                </div>
            </div>
        );
    })
);

export default Footer;
