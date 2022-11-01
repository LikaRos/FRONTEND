import React from 'react';
import ContactsItem from '../../components/ContactsItem/ContactsItem';
import { nanoid } from 'nanoid';

import styles from './ContactsPage.module.css';
import { contacts } from '../../components/data/contacts.js';
import Appear from 'components/common/Appear/Appear';

const ContactsPage = () => {
  return (
    <>
    <Appear time={650}>
    <div className={styles.wrapper}>
      <div className={styles.headContainer}>
        <h2 className={styles.head}>Our team</h2>
      </div>
      <ul className={styles.ourTeam}>
        {contacts.map(item => (
          <li key={nanoid()} className={styles.ourTeam_Item}>
            <ContactsItem {...item} />
          </li>
        ))}
      </ul>
    </div>
    </Appear>
    </>
  );
};

export default ContactsPage;
