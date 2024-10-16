import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faHome, faPerson, faUser, faUserCheck, } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  description: string;
  progressValue: string;
  progress: number;
  avatar: ImageSourcePropType;
  countLabel: string;
  itemsCount: number;
  gradientColors: string[];
  titleStyle?: object;
  descriptionStyle?: object;
  progressTextStyle?: object;
  infoBoxColor?: object;
  progressBarColor?: object;
  avatarStyle?: object;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  progressValue,
  progress,
  avatar,
  countLabel,
  itemsCount,
  gradientColors,
  descriptionStyle,
  progressTextStyle,
  infoBoxColor,
  titleStyle,
  progressBarColor,
  avatarStyle
}) => (
  <LinearGradient colors={gradientColors} style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.textSection}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
        <View style={styles.progressInfo}>
          <View style={[styles.infoBox, infoBoxColor]}>
            <Text style={styles.infoText}>{itemsCount} {countLabel}</Text>
          </View>
        </View>
        <Text style={[styles.progressText, progressTextStyle]}>{progressValue}</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color="#fff"
          style={[styles.progressBar, progressBarColor]}
        />
      </View>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/images/Vector.png')} style={styles.backgroundAvatar} />
        <Image source={avatar} style={[styles.avatar, avatarStyle]} />
      </View>
    </View>
  </LinearGradient>
);


// Specific Card Components
const GroceryCard = () => (
  <Card
    title="Grocery List"
    description="Add needed items."
    progressValue="Bought 70%"
    progress={0.7}
    avatar={require('../assets/images/avator1.png')}
    countLabel="Items"
    itemsCount={200}
    gradientColors={['#9CF4F5', '#BEF8F9']}
    titleStyle={{ color: '#086378' }}
    descriptionStyle={{ color: '#086378' }}
    progressTextStyle={{ color: '#086378' }}
    infoBoxColor={{ backgroundColor: '#086378' }}
    progressBarColor={{ color: '#086378' }}
  />
);

const SpiritualGoalsCard = () => (
  <Card
    title="Spiritual Goals"
    description="Add your spiritual goals."
    progressValue="Achieved 30%"
    progress={0.3}
    avatar={require('../assets/images/avator1.png')}
    countLabel="Goals"
    itemsCount={10}
    gradientColors={['#98FBCC', '#BCFBDC']}
    titleStyle={{ color: '#109166' }}
    descriptionStyle={{ color: '#109166' }}
    progressTextStyle={{ color: '#109166' }}
    infoBoxColor={{ backgroundColor: '#109166' }}
    progressBarColor={{ color: '#109166' }}
  />
);

const PersonalGroomingCard = () => (
  <Card
    title="Personal Grooming"
    description="Add your grooming tasks in list."
    progressValue="Completed 80%"
    progress={0.8}
    avatar={require('../assets/images/avator1.png')}
    avatarStyle={{ width: 110, height: 220 }}
    countLabel="Tasks"
    itemsCount={10}
    gradientColors={['#fadee6', '#fadee6']}
    titleStyle={{ color: '#C34C6C' }}
    descriptionStyle={{ color: '#C34C6C' }}
    progressTextStyle={{ color: '#C34C6C' }}
    infoBoxColor={{ backgroundColor: '#C34C6C' }}
    progressBarColor={{ color: '#C34C6C' }}
  />
);

const ToDoListCard = () => (
  <Card
    title="Things To Do"
    description="Add tasks in your to do list."
    progressValue="Completed 40%"
    progress={0.4}
    avatar={require('../assets/images/avator1.png')}
    avatarStyle={{ width: 120, height: 220 }}
    countLabel="Tasks"
    itemsCount={15}
    gradientColors={['#f5b7a6', '#f5b7a6']}
    titleStyle={{ color: '#e36a4a' }}
    descriptionStyle={{ color: '#e36a4a' }}
    progressTextStyle={{ color: '#e36a4a' }}
    infoBoxColor={{ backgroundColor: '#e36a4a' }}
    progressBarColor={{ color: '#e36a4a' }}
  />
);

const KitchenMenuCard = () => (
  <Card
    title="Kitchen Menu"
    description="Add items to your list."
    progressValue="Cooked 70%"
    progress={0.7}
    avatar={require('../assets/images/avator1.png')}
    avatarStyle={{ width: 150, height: 220 }}
    countLabel="Recipes"
    itemsCount={500}
    gradientColors={['#f7deb7', '#f7deb7']}
    titleStyle={{ color: '#D88D1B' }}
    descriptionStyle={{ color: '#d88d1b' }}
    progressTextStyle={{ color: '#d88d1b' }}
    infoBoxColor={{ backgroundColor: '#d88d1b' }}
    progressBarColor={{ color: '#d88d1b' }}
  />
);

const App: React.FC = () => {


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hello,</Text>
          <Text style={styles.appNameText}>MetaFront!</Text>
          <Text style={styles.descriptionText}>
            Stay organized with quick access to all your essential lists!
          </Text>
          <View style={styles.listContainer}>
            <TextInput style={styles.searchInput} />

            {/* TouchableOpacity for the icon */}
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/70/70115.png' }} // Replace with your icon URL or local asset
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

        </View>

        {/* Card Components */}
        <GroceryCard />
        <SpiritualGoalsCard />
        <PersonalGroomingCard />
        <ToDoListCard />
        <View style={{ marginBottom: 100 }}>
          <KitchenMenuCard />
        </View>

      </ScrollView>

      {/* Bottom Navigation (Fixed) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} >
          <FontAwesomeIcon icon={faBell} size={20} color="#ccc" />
          <Text style={styles.navButtonText}>Notifications</Text>
        </TouchableOpacity>

        {/* Container for Home Buttons */}
        <View style={{ alignItems: 'center', marginLeft: -15, }}>
          <View style={styles.homesingButton} />
          <TouchableOpacity style={styles.homeButton}>
            <FontAwesomeIcon icon={faHome} size={20} color="#fff" />
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.navButton} >
          <FontAwesomeIcon icon={faUser} size={20} color="#ccc" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F3F9',

  },
  header: {
    marginHorizontal: 10,
  },
  card: {
    width: width * 0.9,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textSection: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B878C',
  },
  description: {
    fontSize: 16,
    color: '#0B878C',
    marginVertical: 5,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  infoBox: {

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 13,
    marginRight: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
  progressText: {

    fontSize: 14,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
    marginTop: 5,
    width: '50%'
  },
  avatarContainer: {
    position: 'absolute', // Enable absolute positioning
    top: 0,
    right: 0,
    width: 80, // Width of the foreground avatar
    height: 80, // Height of the foreground avatar
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'flex-start', // Align items to the top
  },
  backgroundAvatar: {
    width: 120, // Adjust to your needs
    height: 100, // Adjust to your needs
    position: 'absolute', // Position it absolutely within the container
    top: -30, // Increased to move it higher
    right: -30, // Increased to move it further right
    resizeMode: 'contain', // Maintain the aspect ratio
    opacity: 0.9, // Optional: make it semi-transparent
  },
  avatar: {
    width: 160, // Width of the main avatar
    height: 190, // Height of the main avatar
    top: -10,
    right: -20,
    resizeMode: 'contain',
  },

  welcomeText: {
    marginTop: 20,
    fontSize: 20,
    color: '#666',
    marginBottom: 10,
  },
  appNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
    width: 300,
    marginHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background color
    borderRadius: 10,
    padding: 5,
  },
  iconContainer: {
    top: 5,
    padding: 5,
    backgroundColor: '#00bcd4', // Icon background color (blue from the image)
    borderRadius: 8,
  },
  icon: {

    width: 30,
    height: 30,                // Icon size (adjust as per design)
    tintColor: '#fff',         // Icon color (white)
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    paddingHorizontal: 30,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  homesingButton: {
    width: 65,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute', // Make this button absolute
    marginTop: -40, // To make it look elevated above the nav bar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    alignSelf: 'center', // Center horizontally
    marginLeft: -15,
  },
  homeButton: {
    width: 60,
    height: 60,
    backgroundColor: '#00aaff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30, // To make it look elevated above the nav bar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignSelf: 'center', // Center horizontally

  },
});

export default App;
