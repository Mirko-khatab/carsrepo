import { useState, useEffect } from 'react';

export const tabs = [
    { id: 1, label: 'audi' },
    { id: 2, label: 'bmw' },
    { id: 3, label: 'kia' },
    { id: 4, label: 'volk' },
];

export const imagesData = [
    { id: 1, src: '/assets/images/bmw.png', category: 'bmw' },
    { id: 2, src: '/assets/images/audi.png', category: 'audi' },
    { id: 3, src: '/assets/images/kia.png', category: 'kia' },
    { id: 4, src: '/assets/images/volk.png', category: 'volk' },


    // Add the rest of your images
];

export const imagesData_slider = [
    { id: 1, src: '/assets/photos/1x.jpg' },
];