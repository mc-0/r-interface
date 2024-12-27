import React from 'react';
import { ICONS } from '../../lib/constants/icons';

const IconGroup = ({ title, icons }) => (
    <div className="mb-8">
        {/*<h3 className="text-xl font-semibold mb-4">{title}</h3>*/}
        <div className="flex flex-wrap gap-4">
            {icons.map((Icon, index) => (
                <Icon
                    key={index}
                    className="w-14 h-14 text-gray-700 hover:text-blue-600 transition-colors"
                />
            ))}
        </div>
    </div>
);

const TechIcons = () => {
    const groups = [
        { title: 'Backend', icons: ICONS },
    ];

    return (
        <div className="p-6">
            {groups.map((group) => (
                <IconGroup
                    key={group.title}
                    title={group.title}
                    icons={group.icons}
                />
            ))}
        </div>
    );
};

export default TechIcons;