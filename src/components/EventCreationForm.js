import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../store/actions';
import * as formData from '../formData';

import Form from './UI/Form';
import Card from './UI/Card';
import Title from './Sections/About/Title';
import Description from './Sections/About/Description';
import Category from './Sections/About/Category';
import Payment from './Sections/About/Payment';
import Reward from './Sections/About/Reward';
import Responsible from './Sections/Coordinator/Responsible';
import Email from './Sections/Coordinator/Email';
import StartsOn from './Sections/When/StartsOn';
import Duration from './Sections/When/Duration';
import Button from './UI/Button';

const EventCreationForm = (props) => {
  const dispatch = useDispatch();
  const stateObject = useSelector(state => state);

  const submitHandler = (event) => {
    event.preventDefault();

    const eventFee = stateObject.payment.inputAttributes.amount;
    const reward = stateObject.reward.inputAttributes.value;
    let date = new Date(stateObject.startsOn.inputAttributes.date);
    date = date.toISOString().slice(0, 16);
    const duration = stateObject.duration.inputAttributes.value;

    const formData = {
      title: stateObject.title.inputAttributes.value,
      description: stateObject.description.inputAttributes.value,
      category_id: parseInt(stateObject.category.inputAttributes.value),
      paid_event: stateObject.payment.inputAttributes.isPaidEvent,
      event_fee: eventFee === "" ? 0 : parseInt(eventFee),
      reward: reward === "" ? 0 : reward,
      date: date,
      duration: duration === "" ? 0 : duration * 60 * 60,
      coordinator: {
        email: stateObject.email.inputAttributes.value,
        id: stateObject.responsible.inputAttributes.value
      }
    };

    console.log(JSON.stringify(formData, null, 2));

    props.history.replace('/success');
  };

  const isFormValid = stateObject.title.isValid
    && stateObject.description.isValid
    && stateObject.payment.isValid
    && stateObject.email.isValid
    && stateObject.startsOn.isValid;

  return (
    <Form submitHandler={submitHandler}>
      <Card title="About">
        <Title
          staticData={formData.title}
          storeData={stateObject.title}
          changeHandler={value => dispatch(actions.setTitle(value)) }
          touchedHandler={() => dispatch(actions.touchTitle()) }/>

        <Description
          staticData={formData.description}
          storeData={stateObject.description}
          changeHandler={value => dispatch(actions.setDescription(value)) }
          touchedHandler={() => dispatch(actions.touchDescription()) } />

        <Category
          staticData={formData.category}
          storeData={stateObject.category}
          changeHandler={value => dispatch(actions.setCategory(value)) }
          fetchHandler={ React.useCallback(
            (optionsUrl) => dispatch(actions.fetchCategories(optionsUrl)),
            [ dispatch ]          
          )}
        />

        <Payment
          staticData={formData.payment}
          storeData={stateObject.payment}
          changeIsPaidEventHandler={value => dispatch(actions.setIsPaidEvent(value)) }
          changeAmountHandler={value => dispatch(actions.setPaymentAmount(value)) }
          touchAmountHandler={value => dispatch(actions.touchPaymentAmount(value)) }
        />
        
        <Reward
          staticData={formData.reward}
          storeData={stateObject.reward}
          changeHandler={value => dispatch(actions.setReward(value)) } />
       
      </Card>

      <Card title="Coordinator">
        <Responsible 
          staticData={formData.responsible}
          storeData={stateObject.responsible}
          loggedInUser={formData.loggedInUser}
          changeHandler={value => dispatch(actions.setResponsible(value)) }
          fetchHandler={React.useCallback(
              (usersUrl, loggedInUser) => dispatch(actions.fetchResponsible(usersUrl, loggedInUser)),
              [ dispatch ]
            )}/>

        <Email
          staticData={formData.email}
          storeData={stateObject.email}
          changeHandler={value => dispatch(actions.setEmail(value)) }
          touchedHandler={() => dispatch(actions.touchEmail()) }/>
      </Card>

      <Card title="When">
        <StartsOn
          staticData={formData.startsOn}
          storeData={stateObject.startsOn}
          changeDateHandler={value => dispatch(actions.setDate(value)) }
          changeTimeHandler={value => dispatch(actions.setTime(value)) } 
          changeIsAmHandler={value => dispatch(actions.setIsAm(value)) } />

        <Duration
          staticData={formData.duration}
          storeData={stateObject.duration}
          changeHandler={value => dispatch(actions.setDuration(value)) } />
     </Card>

    <Button type="submit" disabled={!isFormValid}>PUBLISH EVENT</Button>
    </Form>
  );
};

export default EventCreationForm;