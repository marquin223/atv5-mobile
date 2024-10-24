import { Text, View, Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";

export default function Page() {
  const GerarId = () => {
    const randomId = Math.floor(Math.random() * 10000).toString();
    router.push(`/home?id=${randomId}`);
  };
  return (
    <View style={styles.container}>
      <Link style={styles.padding} href={"/home"}>
        Ir para outra pagina
      </Link>
      <Button title="outra pagina" onPress={GerarId}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    padding: 2,
  },
});
