import React from 'react';
import { Avatar } from 'antd';

/**
 * Renders a user avatar component.
 *
 * @return {ReactElement} The rendered user avatar component.
 */
const UserAvatar: React.FC = () => {
  return (
    <Avatar
      style={{ backgroundColor: '#f5222d' }}
      src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
    />
  );
};

export default UserAvatar;
