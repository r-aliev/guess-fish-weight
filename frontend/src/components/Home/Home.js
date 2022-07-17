import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DropzoneArea } from "material-ui-dropzone";
import { useSnackbar } from "notistack";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomizedDot from "./CustomizedDot";

const Home = () => {
  const [key, setKey] = useState(0);
  const [files, setFiles] = useState([]);
  const [response, setResponse] = useState([]);
  useEffect(
    () => {
      console.log("use", response);
    },
    [response] //This is dependency and it will run only when data is changed
  );

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    console.log(files);
    if (files.length) {
      const headers = {
        "Content-Disposition": `attachment; filename=${files[0].name}`,
      };
      const formData = new FormData();
      formData.append("file", files[0], files[0].name);
      fetch(`/api/`, {
        method: "POST",
        header: headers,
        body: formData,
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          setKey(key + 1);
          return res.json();
        })
        .then((data) => {
          setResponse(JSON.parse(data.prediction));
          enqueueSnackbar(`Prediction response is received`, {
            variant: "success",
          });
        })
        .catch((err) => {
          err.json().then((data) => {
            enqueueSnackbar(`${data.message}`, { variant: "error" });
          });
        });
    }
  };

  const hadleGetSample = () => {
     fetch(`/api/`, {

     })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        setResponse(JSON.parse(data.sampleData));
        enqueueSnackbar(`Sample data was successfully fetched`, {
          variant: "success",
        });
      })
   }
   

  

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DropzoneArea
          key={key}
          onChange={(_files) => setFiles(_files)}
          acceptedFiles={[".csv"]}
          maxFileSize={50e6}
          filesLimit={1}
          dropzoneText="Click or Drop a .csv file here"
          showFileNames
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </Grid>
      <Grid item xs={12}>
        
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} my={2}>
            If you want to test our app with our data, click to the button.
          </Typography>
          <Button variant="contained" onClick={hadleGetSample}>
            Generate a Sample
          </Button>
        
      </Grid>
      {response.length > 0 && (
        <>
          <Grid item xs={6} my={5}>
            <LineChart width={600} height={300} data={response}>
              <Line
                type="monotone"
                dataKey="LengthVer"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="Weight"
                label={{
                  value: "Weight",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{
                  value: "LengthVer",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
            </LineChart>
          </Grid>

          <Grid item xs={6} my={5}>
            <LineChart width={600} height={300} data={response}>
              <Line
                type="monotone"
                dataKey="LengthDia"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="Weight"
                label={{
                  value: "Weight",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{
                  value: "LengthDia",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
            </LineChart>
          </Grid>

          <Grid item xs={6} my={5}>
            <LineChart width={600} height={300} data={response}>
              <Line
                type="monotone"
                dataKey="LengthCro"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="Weight"
                label={{
                  value: "Weight",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{
                  value: "LengthCro",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
            </LineChart>
          </Grid>

          <Grid item xs={6} my={5}>
            <LineChart width={600} height={300} data={response}>
              <Line
                type="monotone"
                dataKey="Height"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="Weight"
                label={{
                  value: "Weight",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{ value: "Height", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
            </LineChart>
          </Grid>

          <Grid item xs={6} my={5}>
            <LineChart width={600} height={300} data={response}>
              <Line
                type="monotone"
                dataKey="Width"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="Weight"
                label={{
                  value: "Weight",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{ value: "Width", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
            </LineChart>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
