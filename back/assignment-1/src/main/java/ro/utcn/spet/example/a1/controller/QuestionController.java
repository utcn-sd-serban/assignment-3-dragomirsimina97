package ro.utcn.spet.example.a1.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ro.utcn.spet.example.a1.dto.QuestionDTO;
import ro.utcn.spet.example.a1.service.QtagManagementService;
import ro.utcn.spet.example.a1.service.QuestionManagementServive;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionManagementServive questionService;

    @GetMapping("/questions")
    public List<QuestionDTO> readAll() {
        return questionService.question();
    }

    @PostMapping("/questions")
    public QuestionDTO create(@RequestBody QuestionDTO dto) {
        return questionService.insert(dto);
    }

    @GetMapping("/questions/title/{title}")
    public List<QuestionDTO> fitlerQuestionsByTitle(@PathVariable("title") String title){
        return questionService.findtitle(title);
    }
}
