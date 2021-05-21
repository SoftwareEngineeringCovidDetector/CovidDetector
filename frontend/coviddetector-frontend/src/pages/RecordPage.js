import React from "react";
import Recorder from "../components/record/recorder"
import RecorderAccurate from "../components/record/recorder_accurate";
import {Typography, Box, Switch} from "@material-ui/core";
import isLoggedIn from "../functions/isLoggedIn";
import SymptomsSurvey from "../components/record/symptoms_survey";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";


class RecordPage extends React.Component {
    constructor(props) {
        super(props);
        this.survey = React.createRef()
        console.log(this.survey)
        this.state = {
            accurate_test: false,
        }
    }

    retrieveSurveyResults = (childData) => {
        this.setState(childData)
    }

    handleChange = (event) => {
        this.setState({accurate_test: (this.state.accurate_test ? false : true)})

    };


    render() {
        return (<Box container spacing={2} justify="center">
                <Typography align='center' variant='h1' color='secondary'>COUGHVID test now!</Typography>
                <Grid component="label" container alignItems="center" spacing={1} justify='center'>
                    <Grid item>Fast Test</Grid>
                    <Grid item>
                        <FormControlLabel m
                                          control={<Switch color='secondary' checked={this.state.accurate_test}
                                                           onChange={this.handleChange}
                                                           name="accurate.test"/>}
                        />
                    </Grid>
                    <Grid item>Accurate Test</Grid>
                </Grid>
                {this.state.accurate_test ? <RecorderAccurate surveyResults={this.state} N={3}/> :
                    <Recorder surveyResults={this.state}/>}
                {isLoggedIn() ? <SymptomsSurvey updateSurveyResults={this.retrieveSurveyResults}/> : ''}
            </Box>
        )
    }

}

export default RecordPage;
