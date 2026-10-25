
import { useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';

import InfoCard from './src/components/InfoCard';

const TASKS = [
  {
    id: '1',
    title: 'Membuat UI Aplikasi',
    status: 'selesai',
    description: 'Menyelesaikan rancangan antarmuka aplikasi mobile.',
  },
  {
    id: '2',
    title: 'Mempelajari FlatList',
    status: 'proses',
    description: 'Memahami cara menampilkan data menggunakan FlatList.',
  },
  {
    id: '3',
    title: 'Mengerjakan UTS Mobile',
    status: 'proses',
    description: 'Menyelesaikan fitur sesuai rubrik penilaian UTS.',
  },
];

const STUDENTS = [
  { id: '1', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '2', nama: 'Siti Aisyah', prodi: 'Sistem Informasi' },
  { id: '3', nama: 'Andi Wijaya', prodi: 'Teknologi Informasi' },
  { id: '4', nama: 'Citra Lestari', prodi: 'Manajemen' },
  { id: '5', nama: 'Dimas Pratama', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Nadia Putri', prodi: 'Akuntansi' },
  { id: '7', nama: 'Rizky Saputra', prodi: 'Teknologi Informasi' },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

function MainApp() {
  // const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('tasks');
  const [search, setSearch] = useState('');

  const filteredStudents = STUDENTS.filter((student) =>
    student.nama.toLowerCase().includes(search.trim().toLowerCase())
  );

  const completedTasks = TASKS.filter(
    (task) => task.status === 'selesai'
  ).length;

  function showTaskDetail(task) {
    Alert.alert(
      task.title,
      `${task.description}\n\nStatus: ${
        task.status === 'selesai' ? 'Selesai' : 'Proses'
      }`
    );
  }

  function renderStudent({ item, index }) {
    return (
      <View style={styles.studentCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.nama.charAt(0).toUpperCase()}
          </Text>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{item.nama}</Text>
          <Text style={styles.studentMajor}>{item.prodi}</Text>
        </View>

        <Text style={styles.studentNumber}>
          {String(index + 1).padStart(2, '0')}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'right', 'bottom', 'left']}
    >

      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FC" />

      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>CAMPUS HUB</Text>
            <Text style={styles.headerTitle}>
              {activeTab === 'tasks' ? 'My Dashboard' : 'Mahasiswa'}
            </Text>
            <Text style={styles.headerSubtitle}>
              {activeTab === 'tasks'
                ? 'Kelola progres belajar kamu.'
                : 'Temukan mahasiswa dengan mudah.'}
            </Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>A</Text>
          </View>
        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'tasks' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('tasks')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'tasks' && styles.activeTabText,
              ]}
            >
              Dashboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'students' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('students')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'students' && styles.activeTabText,
              ]}
            >
              Mahasiswa
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'tasks' ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.heroCard}>
              <Text style={styles.heroLabel}>PROGRES TUGAS</Text>
              <Text style={styles.heroTitle}>Terus berkembang.</Text>
              <Text style={styles.heroDescription}>
                Selesaikan tugas satu per satu dan pantau progres belajarmu.
              </Text>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${
                        (completedTasks / TASKS.length) * 100
                      }%`,
                    },
                  ]}
                />
              </View>

              <Text style={styles.progressText}>
                {completedTasks} dari {TASKS.length} tugas selesai
              </Text>
            </View>

            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Daftar Tugas</Text>
                <Text style={styles.sectionSubtitle}>
                  Semua aktivitas kamu
                </Text>
              </View>

              <View style={styles.countBadge}>
                <Text style={styles.countText}>{TASKS.length}</Text>
              </View>
            </View>

            {TASKS.map((task) => (
              <InfoCard
                key={task.id}
                title={task.title}
                status={task.status}
                onPress={() => showTaskDetail(task)}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.directoryContainer}>
            <View style={styles.directoryIntro}>
              <Text style={styles.sectionTitle}>
                Direktori Mahasiswa
              </Text>
              <Text style={styles.sectionSubtitle}>
                Cari berdasarkan nama mahasiswa.
              </Text>
            </View>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>

              <TextInput
                style={styles.searchInput}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#94A3B8"
                value={search}
                onChangeText={setSearch}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
              />

              {search.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearch('')}
                  accessibilityLabel="Hapus pencarian"
                >
                  <Text style={styles.clearButton}>×</Text>
                </TouchableOpacity>
              )}
            </View>

            <Text style={styles.resultText}>
              {filteredStudents.length} mahasiswa ditemukan
            </Text>

            <FlatList
              data={filteredStudents}
              keyExtractor={(item) => item.id}
              renderItem={renderStudent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.studentList}
              keyboardShouldPersistTaps="handled"
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <Text style={styles.emptyTitle}>
                    Data tidak ditemukan!
                  </Text>
                  <Text style={styles.emptyDescription}>
                    Coba gunakan nama mahasiswa yang berbeda.
                  </Text>
                </View>
              }
            />
          </View>
        )}

        <View style={styles.bottomBar}>
          <Text style={styles.bottomBrand}>CAMPUS HUB</Text>
          <Text style={styles.bottomCaption}>UTS MOBILE • EXPO</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 22,
  },
  eyebrow: {
    color: '#3158C8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },
  headerTitle: {
    color: '#172033',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  headerSubtitle: {
    color: '#778198',
    fontSize: 13,
    marginTop: 5,
  },
  profileCircle: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#DCE6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: '#2348B7',
    fontSize: 19,
    fontWeight: '800',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E9EDF5',
    padding: 5,
    borderRadius: 14,
    marginBottom: 22,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    color: '#778198',
    fontSize: 13,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#2348B7',
    fontWeight: '800',
  },
  scrollContent: {
    paddingBottom: 12,
  },
  heroCard: {
    backgroundColor: '#1D3575',
    padding: 22,
    borderRadius: 22,
    marginBottom: 28,
  },
  heroLabel: {
    color: '#B8C9FF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 12,
  },
  heroDescription: {
    color: '#D5DDF7',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
  },
  progressTrack: {
    height: 7,
    backgroundColor: '#40558B',
    borderRadius: 10,
    marginTop: 22,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8ED9B5',
    borderRadius: 10,
  },
  progressText: {
    color: '#E4EAFF',
    fontSize: 11,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#172033',
    fontSize: 19,
    fontWeight: '800',
  },
  sectionSubtitle: {
    color: '#8992A6',
    fontSize: 12,
    marginTop: 5,
  },
  countBadge: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#E1E9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#2348B7',
    fontWeight: '800',
  },
  directoryContainer: {
    flex: 1,
  },
  directoryIntro: {
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E2E7F0',
    paddingHorizontal: 15,
    minHeight: 54,
  },
  searchIcon: {
    fontSize: 25,
    color: '#64748B',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#172033',
    fontSize: 14,
    paddingVertical: 13,
  },
  clearButton: {
    color: '#64748B',
    fontSize: 25,
    paddingLeft: 10,
  },
  resultText: {
    color: '#778198',
    fontSize: 12,
    marginTop: 18,
    marginBottom: 12,
  },
  studentList: {
    paddingBottom: 12,
    flexGrow: 1,
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9EDF4',
    padding: 14,
    marginBottom: 11,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E5EBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#2348B7',
    fontSize: 18,
    fontWeight: '800',
  },
  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  studentName: {
    color: '#172033',
    fontSize: 14,
    fontWeight: '700',
  },
  studentMajor: {
    color: '#8992A6',
    fontSize: 12,
    marginTop: 5,
  },
  studentNumber: {
    color: '#A1AABD',
    fontSize: 11,
    fontWeight: '700',
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    marginTop: 8,
  },
  emptyTitle: {
    color: '#172033',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  emptyDescription: {
    color: '#8992A6',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: '#E6EAF2',
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomBrand: {
    color: '#3158C8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  bottomCaption: {
    color: '#A0A8B8',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
});