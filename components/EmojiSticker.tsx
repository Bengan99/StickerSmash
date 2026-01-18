import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
}

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    return (
        <View>
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
        </View>
    );
}