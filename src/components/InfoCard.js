import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isCompleted = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: isCompleted ? '#DCFCE7' : '#FFEDD5',
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: isCompleted ? '#15803D' : '#C2410C',
              },
            ]}
          >
            {isCompleted ? 'Selesai' : 'Proses'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 18,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#172033',
    lineHeight: 23,
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#1D4ED8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});