import {
  // WeekCalendar,
  CalendarProvider,
  // Calendar,
  ExpandableCalendar,
} from 'react-native-calendars';
import dayjs from 'dayjs';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/ContainerView';
const CalendarScreen: React.FunctionComponent = () => {
  const dateNow = dayjs().format('YYYY-MM-DD');
  return (
    <Container style={styles.container}>
      <CalendarProvider date={dateNow}>
        {/* <WeekCalendar /> */}
        <ExpandableCalendar
          onDayPress={day => {
            console.log('selected day', day);
          }}
        />
      </CalendarProvider>
    </Container>
  );
};

export default CalendarScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
