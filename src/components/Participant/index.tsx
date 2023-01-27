import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Participant() {
  const handleParticipantRemove = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Cristiano Nunes</Text>
      <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
