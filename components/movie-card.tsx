import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                {/* Movie Poster */}
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placeholder.co/600x400/1a1a1a/ffffff.png',
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                {/* Movie Title */}
                <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>
                    {title}
                </Text>

                {/* Movie Rating */}
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4" />
                    <Text className="text-xs text-white font-bold uppercase">
                        {Math.round(vote_average)}
                    </Text>
                </View>

                {/* Movie Release Date */}
                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-light-300 font-medium mt-1">
                        {release_date?.split('-')[0]}
                    </Text>
                    <Text className="text-xs font-medium text-light-300 uppercase">Movie</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};
