'use client';

import type { JSX } from 'react';
import { useState } from 'react';
import Image from 'next/image';

interface WidgetOption {
    readonly alt: string;
    readonly label: string;
    readonly src: string;
}

interface WidgetShowcaseProps {
    readonly label: string;
    readonly options: readonly WidgetOption[];
}

export function WidgetShowcase({
    label,
    options,
}: WidgetShowcaseProps): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedOption = options[selectedIndex] ?? options[0];

    return (
        <aside aria-label={label} className='widgetShowcase'>
            <div aria-live='polite' className='widgetShowcase__media'>
                <Image
                    alt={selectedOption.alt}
                    className='widgetShowcase__image'
                    height={654}
                    key={selectedOption.src}
                    priority
                    src={selectedOption.src}
                    width={1140}
                />
            </div>
            <div aria-label={label} className='widgetShowcase__picker'>
                {options.map((option, index) => (
                    <button
                        aria-pressed={selectedIndex === index}
                        className='widgetShowcase__option'
                        key={option.src}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                        type='button'
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </aside>
    );
}
