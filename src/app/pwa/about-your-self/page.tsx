"use client";
import * as z from "zod";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useYourSelf } from "./hook/useYourSelf";

const AboutYourSelfPage = () => {
  const { initialValues, handleYourSelf, schema } = useYourSelf();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleYourSelf)}
          className="space-y-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex  justify-start items-center gap-4">
              <FaAngleLeft />
              <Progress value={66} className="h-2 w-full" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <h1 className="font-bold">Tell us about yourself?</h1>
              <div className="flex flex-col gap-2 w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Last Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pinCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Pincode" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AboutYourSelfPage;
