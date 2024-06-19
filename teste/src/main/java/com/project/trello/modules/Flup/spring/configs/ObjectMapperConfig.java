package com.project.trello.modules.Flup.spring.configs;

import com.project.trello.modules.Flup.spring.Json;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ObjectMapperConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return Json.mapper();
    }
}