import { useEffect, useState } from "react";
import { Text, View } from "../../components/Themed";
import { IMovie } from "../lib/types";
import { popularMovies, topRatedMovies, trendingMovies } from "../lib/api";
import Loader from "../../components/shared/loader";
import { ScrollView, StyleSheet } from "react-native";
import Banner from "../../components/shared/banner";
import MovieCard from "../../components/card/movie-card";

export default function movies() {
  const [trending, setTrending] = useState<IMovie[]>([]);
  const [topRated, setTopRated] = useState<IMovie[]>([]);
  const [popular, setPopular] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies();
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  const getTrendingMovies = async () => {
    setIsLoading(true);
    const trending = await trendingMovies();
    setTrending(trending);
    setIsLoading(false);
  };

  const getTopRatedMovies = async () => {
    const topRated = await topRatedMovies();
    setTopRated(topRated);
  };

  const getPopularMovies = async () => {
    const popular = await popularMovies();
    setPopular(popular);
  };
  if (isLoading) return <Loader />;
  return (
    <ScrollView style={{ backgroundColor: "#000000" }}>
      <View className="flex-1">
        <Banner movies={trending} />
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Trending Movies</Text>
            <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
              {trending.map((item) => (
                <MovieCard item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.title}>Top Rated Movies</Text>
            <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
              {topRated.map((item) => (
                <MovieCard item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.title}>Popular Movies</Text>
            <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
              {popular.map((item) => (
                <MovieCard item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    rowGap: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
  },
});
