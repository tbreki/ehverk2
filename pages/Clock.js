import LinkButton from '../components/Linkbutton';
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';




export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}
